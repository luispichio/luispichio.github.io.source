import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGithub, IconExternal, IconFolder } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: center;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const IconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.large};
  color: ${colors.lightestSlate};
`;
const ProjectDescription = styled.div`
  font-size: ${fontSizes.small};
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    color: ${colors.lightSlate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
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

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <ProjectsContainer>
      <ProjectsTitle ref={revealTitle}>Otros proyectos</ProjectsTitle>
      <ProjectsGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech, cover } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <Project
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <ProjectInner>
                      <header>
                        <ProjectHeader>
                          <Folder>
                            <IconFolder />
                          </Folder>
                          <Links>
                            {github && (
                              <IconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Github Link">
                                <IconGithub />
                              </IconLink>
                            )}
                            {external && (
                              <IconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </IconLink>
                            )}
                          </Links>
                        </ProjectHeader>
                        <ProjectName>{title}</ProjectName>
                        <ImgContainer
                          href={external ? external : github ? github : '#'}
                          target="_blank"
                          rel="nofollow noopener noreferrer">
                          {cover && (<FeaturedImg fluid={cover.childImageSharp.fluid} />)}
                        </ImgContainer>                    
                        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        <TechList>
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </TechList>
                      </footer>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ProjectsGrid>

      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Ver menos' : 'Ver más'} Proyectos
      </ShowMoreButton>
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
