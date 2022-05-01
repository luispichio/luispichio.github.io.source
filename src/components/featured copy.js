import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGithub, IconExternal } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const FeaturedContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ContentContainer = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const FeaturedLabel = styled.h4`
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const ProjectDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.medium};
  border-radius: ${theme.borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
    color: ${colors.white};
  }
`;
const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0 10px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smallish};
    color: ${colors.lightSlate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const FeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const ImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.green};
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${FeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`margin-bottom: 70px;`};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${ContentContainer} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${TechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${ImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
`;
const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  justify-content: center;
`;
const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: max-content;
  justify-content: center;
  z-index: 3;
  margin-bottom: 30px;
  width: calc(100% + 100px);
  margin-left: -50px;
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
    min-width: 120px;
    border-bottom: 2px solid ${props => (props.isActive ? colors.green : colors.darkGrey)};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors.green};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  width: 100%;
  max-width: ${theme.tabWidth}px;
  height: 2px;
  top: auto;
  bottom: 0;
  transform: translateX(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0)}px
  );
  margin-left: 50px;
`;

const Featured = ({ data }) => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);
  const [activeTag, setActiveTag] = useState('destacado');
  const [activeTabId, setActiveTabId] = useState(0);
  const projects = data.filter(({ node }) => (node.frontmatter.show === 'true'));
  const filteredProjects = data.filter(({ node }) => (!activeTag) || node.frontmatter.tags.includes(activeTag));
  const getTagMap = featuredProjects => {
    const result = new Map();
    featuredProjects.map(({ node }) => {
      const { frontmatter } = node;
      const { tags } = frontmatter; 
      tags.forEach(tag => {
        if (result.has(tag)){
          result.set(tag, result.get(tag) + 1);
        } else {
          result.set(tag, 1);
        }
      });
    });
    return result;
  };
  const tags = () => {
    const result = [];
    getTagMap(projects).forEach((count, tag) => {
      result.push(tag);
    });
    return result;
  };
  return (
    <FeaturedContainer id="projects">
      <Heading ref={revealTitle}>Portfolio de proyectos</Heading>
      <TabsContainer>
        <Tabs role="tablist">
          {
            tags().map((tag, i) => {
              return (
                <li key={tag}>
                  <Tab
                    isActive={activeTabId === i}
                    onClick={() => {
                      setActiveTabId(i);
                      setActiveTag(tag);
                    }}
                    role="tab"
                    aria-selected={activeTabId === i ? 'true' : 'false'}
                    aria-controls={`tab${0}`}
                    id={`tab${0}`}
                    tabIndex={activeTabId === i ? '0' : '-1'}
                  >
                    <span>{tag}</span>
                  </Tab>
                </li>
              );
            })
          }
        </Tabs>
      </TabsContainer>
      <div>
        {filteredProjects &&
          filteredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <Project key={i} ref={el => (revealProjects.current[i] = el)}>
                <ContentContainer>
                  <FeaturedLabel>Proyecto destacado</FeaturedLabel>
                  <ProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {title}
                      </a>
                    ) : (
                        title
                      )}
                  </ProjectName>
                  <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <TechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </TechList>
                  )}
                  <Links>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Github Link">
                        <IconGithub />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <IconExternal />
                      </a>
                    )}
                  </Links>
                </ContentContainer>

                <ImgContainer
                  href={external ? external : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <FeaturedImg fluid={cover.childImageSharp.fluid} />
                </ImgContainer>
              </Project>
            );
          })}
      </div>
    </FeaturedContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
