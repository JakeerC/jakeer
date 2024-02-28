'use client';
import * as React from 'react';
import { FiMail } from 'react-icons/fi';

import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';
import { footerLinks } from '@/constants/footerLinks';
import { socialLinks } from '@/constants/socialLinks';
import { emailId } from '@/constants/consts';

// import { feedbackFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className="mt-4 pb-2">
      <main className="layout flex flex-col items-center border-t pt-6 dark:border-gray-600">
        <FooterLinks />

        <p className="mt-12 font-medium text-gray-600 dark:text-gray-300">
          Reach me out
        </p>
        <SocialLinks />

        <p className="mt-8 text-sm text-gray-600 dark:text-gray-300">
          © Jakeer {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

//#region  //*=========== Footer Links ===========
function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {footerLinks.map(
        ({ href, text, tooltip, show }) =>
          show && (
            <Tooltip interactive={false} key={href} tipChildren={tooltip}>
              <UnstyledLink
                className="animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200"
                href={href}

                // onClick={() => {
                // TODO : ⬇ type issue ts(2552)
                //   trackEvent(`Footer Link: ${text}`, { type: 'link' });
                // }}
              >
                {text}
              </UnstyledLink>
            </Tooltip>
          )
      )}
    </div>
  );
}
//#endregion  //*======== Footer Links ===========

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className="mt-2 flex space-x-4">
      <div className="flex items-center justify-center">
        <Tooltip
          trigger="mouseenter"
          hideOnClick={false}
          interactive
          render={() => (
            <div className="inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200">
              {copyStatus === 'idle'
                ? 'Click on the mail logo to copy emailId :'
                : 'Copied to clipboard 🥳'}
              <Accent className="inline-block font-medium px-2">
                <UnstyledLink href={`mailto:${emailId}`}>
                  {emailId}
                </UnstyledLink>
              </Accent>
            </div>
          )}
        >
          <>
            {' '}
            <button
              onClick={() => {
                copy(`${emailId}`).then(() => {
                  setCopyStatus('copied');
                  setTimeout(() => setCopyStatus('idle'), 1500);
                });
              }}
              className="rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
            >
              <FiMail className="h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300" />
            </button>
          </>
        </Tooltip>
      </div>
      {socialLinks.map(
        social =>
          social.show && (
            <Tooltip
              interactive={false}
              key={social.href}
              tipChildren={social.text}
            >
              <UnstyledLink
                className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                href={social.href}
                // onClick={() => {
                //   trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
                // }}
              >
                <social.icon className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300" />
              </UnstyledLink>
            </Tooltip>
          )
      )}
    </div>
  );
}
//#endregion  //*======== Social Links ===========
