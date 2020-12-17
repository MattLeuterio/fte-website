import React, { useState, useEffect } from "react";
import { NoResult, PageTitle } from "../../atoms";
import Inter from "../../ui/typography/inter";
import {
  LastResultsContainer,
  Content,
  CardResult,
  DataMatch,
  DataResult,
  Opponent,
  MatchType,
  Label,
} from "./style";

const contentful = require("contentful");

const LastResults = ({ result }) => {
  const [listResults, setListResults] = useState([]);

  const client = contentful.createClient({
    space: "pyt8t28zyl2v",
    accessToken: "FvEK9Z8tlrHzGtG0Zzuk3r9yUp0-mnv6sp3SQFDd58I",
  });

  useEffect(() => {
    client.getEntries({ content_type: "results" }).then((response) => {
      const res = response.items;
      setListResults(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(listResults);

  const calcResults = (fte, opponent) => {
    let result = "";

    fte !== opponent
      ? fte > opponent
        ? (result = "win")
        : (result = "lose")
      : (result = "draw");

    return result;
  };

  console.log(calcResults(8, 7));

  return (
    <LastResultsContainer>
      <PageTitle text="Last results" />
      <Content>
        {listResults.length > 0 ? (
          listResults.map((item, index) => (
            <CardResult key={index}>
              <DataMatch>
                <Opponent>
                  <span>VS </span>
                  {item.fields.opponentTeam}
                </Opponent>
                <MatchType>
                  <Label
                    result={calcResults(
                      `${item.fields.fteScore}`,
                      `${item.fields.opponentScore}`
                    )}
                  >
                    {calcResults(
                      `${item.fields.fteScore}`,
                      `${item.fields.opponentScore}`
                    )}
                  </Label>
                  {item.fields.matchType}
                </MatchType>
                <Inter type="label">{item.fields.otherInfo}</Inter>
              </DataMatch>
              <DataResult>
                <Inter type="resultText">Result</Inter>
                <Inter type="resultNumbers">
                  {item.fields.fteScore}-{item.fields.opponentScore}
                </Inter>
                <Inter type="resultGame">{item.fields.game}</Inter>
              </DataResult>
            </CardResult>
          ))
        ) : (
          <NoResult text="Any result found" />
        )}
      </Content>
    </LastResultsContainer>
  );
};

export default LastResults;
