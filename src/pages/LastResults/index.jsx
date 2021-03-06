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
import { getContent } from "../../contentful";


const LastResults = () => {
  const [listResults, setListResults] = useState([]);

  useEffect(() => {
    getContent("results", setListResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calcResults = (fte, opponent) => {
    let result = "";

    fte !== opponent
      ? fte > opponent
        ? (result = "win")
        : (result = "lose")
      : (result = "draw");

    return result;
  };

  return (
    <LastResultsContainer>
      <PageTitle text="Latest results" subText="Freshness" />
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
