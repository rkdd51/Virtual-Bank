import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/siginin">How it works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/siginin">How it works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/siginin">How it works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/siginin">How it works</FooterLink>
                <FooterLink to="/siginin">Testimonials</FooterLink>
                <FooterLink to="/siginin">Careers</FooterLink>
                <FooterLink to="/siginin">Investors</FooterLink>
                <FooterLink to="/siginin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Logo</SocialLogo>
              <WebsiteRights>
                {" "}
                Logo © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/ThisIsIt.786/"
                  traget="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/"
                  traget="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/"
                  traget="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/"
                  traget="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;
