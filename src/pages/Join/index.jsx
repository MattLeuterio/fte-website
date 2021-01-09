import React, { useState, useEffect } from "react";

import {
  JoinContainer,
  Content,
  LookingFor,
  CardLookingFor,
  CardHeader,
  CardBody,
  CardPrimaryInfo,
  FormContainer,
  FormDescription,
  Form,
} from "./style";
import { Icon, NoResult, PageTitle, ToggleSection } from "../../atoms";
import { IconLookingPerson } from "../../ui/assets/icons";
import Inter from "../../ui/typography/inter";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { FormApply } from "../../components";

const contentful = require("contentful");

const Join = () => {
  const [list, setList] = useState([]);

  const client = contentful.createClient({
    space: "pyt8t28zyl2v",
    accessToken: "FvEK9Z8tlrHzGtG0Zzuk3r9yUp0-mnv6sp3SQFDd58I",
  });

  useEffect(() => {
    client.getEntries({ content_type: "lookingFor" }).then((response) => {
      const res = response.items;
      setList(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <JoinContainer>
      <PageTitle text="Join" />
      <Content>
        <LookingFor>
          {list.length > 30 ? (
            list.map((item, index) => (
              <CardLookingFor key={index}>
                <CardHeader>
                  <Icon icon={IconLookingPerson} size={30} />
                  <Inter type="regularBold">{item.fields.role}</Inter>
                </CardHeader>
                <CardBody>
                  <CardPrimaryInfo>
                    <Inter type="labelUppercase">Game</Inter>
                    <Inter type="gameUppercase">{item.fields.game}</Inter>
                  </CardPrimaryInfo>
                  <CardPrimaryInfo>
                    <Inter type="labelUppercase">Platform</Inter>
                    <Inter type="gameUppercase">{item.fields.platform}</Inter>
                  </CardPrimaryInfo>
                </CardBody>
                <ToggleSection text="REQUIREMENTS">
                  <ul>
                    {item.fields.requirements?.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </ToggleSection>
              </CardLookingFor>
            ))
          ) : (
            <NoResult text="In questo momento non cerchiamo nessuna figura specifica. Se vuoi proporti fai l'apply." />
          )}
        </LookingFor>
        <FormContainer>
          <FormDescription>
            Compila il form qui sotto per entrare a far parte di uno dei nostri
            team. Verrai ricontattato il prima possibile da un nostro admin.
          </FormDescription>
          <Form>
            <ToggleSection text="Apply">
              <FormApply />
            </ToggleSection>
          </Form>
        </FormContainer>
      </Content>
    </JoinContainer>
  );
};

export default withMediaQueries(Join);
