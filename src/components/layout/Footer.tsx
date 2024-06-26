import * as React from 'react';

import { Jakeer } from '@/components/CJ';
import UnstyledLink from '@/components/links/UnstyledLink';

import { primaryNavLinks, secondaryNavLinks } from '@/constants';
import { socialLinks } from '@/constants';

export default function Footer() {
  return (
    <footer className="pb-2 mt-4 mb-4 ">
      <main className="flex items-center gap-8 pt-6 align-top border-t layout dark:border-slate-600">
        <div className="flex-[2] flex flex-col justify-between self-stretch">
          <div>
            <Jakeer />
            <p className="mt-4 mb-4">
              Front-end engineer primary focussed on react ecosystem
            </p>
            <SocialLinks />
          </div>
          <p className="mt-8 text-sm text-slate-600 dark:text-slate-300 opacity-60">
            © Jakeer {new Date().getFullYear()}
          </p>
        </div>
        <SecondaryNavLinks navLinks={primaryNavLinks} headerName="Main" />
        <SecondaryNavLinks navLinks={secondaryNavLinks} headerName="Misc" />
      </main>
    </footer>
  );
}

//#region  //*=========== Footer Links ===========
function SecondaryNavLinks({
  navLinks,
  headerName,
}: {
  navLinks: {
    href: string;
    label: string;
    show: boolean;
  }[];
  headerName: string;
}) {
  return (
    <ul className="flex flex-col flex-wrap self-start flex-1 gap-2">
      <li className="" key={headerName}>
        {headerName}
      </li>
      {navLinks.map(
        ({ href, label, show }) =>
          show && (
            <li key={label}>
              <UnstyledLink
                className="text-sm font-medium rounded-sm opacity-40 hover:opacity-100 animated-underline focus-focus dark:text-slate-200"
                href={href}
              >
                {label}
              </UnstyledLink>
            </li>
          )
      )}
    </ul>
  );
}
//#endregion  //*======== Footer Links ===========

function SocialLinks() {
  return (
    <ul className="flex gap-6">
      {socialLinks.map(
        social =>
          social.show && (
            <li key={social.href}>
              <UnstyledLink
                className="inline-flex items-center justify-center rounded-sm focus-focus"
                href={social.href}
                aria-label={social.ariaLabel}
              >
                <social.icon className="w-4 h-4 text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-500" />
              </UnstyledLink>
            </li>
          )
      )}
    </ul>
  );
}
