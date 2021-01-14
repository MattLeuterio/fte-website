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
import { getContent } from "../../contentful";

const Join = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getContent("lookingFor", setList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <JoinContainer>
      <PageTitle text="Join" subText="Get in the game!" />
      <Content>
        <LookingFor>
          {list.length > 0 ? (
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
            <NoResult
              text="At this moment we are not looking for any specific figure. If you want to join our team send your application."
              widthCtn="50%"
            />
          )}
        </LookingFor>
        <FormContainer>
          <FormDescription>
            Fill out the form below to join one of our teams. You will be
            contacted as soon as possible by our admin.
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
