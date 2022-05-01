import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsTitle = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const AvatarContainer = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  display: block;
`;
const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: max-content;
  z-index: 3;
  margin-bottom: 30px;
  width: calc(100% + 100px);
  margin-left: -50px;
  li {
    &:first-of-type {
        margin-left: 50px;
    }
    &:last-of-type {
        padding-right: 50px;
    }
  }
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  color: ${props => (props.isActive ? colors.green : colors.lightGrey)};
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${props => (props.isActive ? colors.green : colors.darkGrey)};
    min-width: 120px;
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;

const About = ({ data, skills }) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const { frontmatter, html } = data[0].node;
  const { title, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <AboutContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <TabsContainer>
            <Tabs role="tablist">
              {skills &&
                skills.map(({ node }, i) => {
                  const { title } = node.frontmatter;
                  return (
                    <li key={i}>
                      <Tab
                        isActive={activeTabId === i}
                        onClick={() => setActiveTabId(i)}
                        role="tab"
                        aria-selected={activeTabId === i ? 'true' : 'false'}
                        aria-controls={`tab${i}`}
                        id={`tab${i}`}
                        tabIndex={activeTabId === i ? '0' : '-1'}>
                        <span>{title}</span>
                      </Tab>
                    </li>
                  );
                })}
            </Tabs>
          </TabsContainer>
          <SkillsContainer>
            {skills[activeTabId].node.frontmatter.skills && skills[activeTabId].node.frontmatter.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
        <PicContainer>
          <AvatarContainer href={github}>
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </AvatarContainer>
        </PicContainer>
      </FlexContainer>
    </AboutContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

export default About;
