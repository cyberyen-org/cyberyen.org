import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="50"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="#6D6D6D"
      d="M385 127v25h25v51h51v-51h-25v-50h-51v25m203 0v25h-25v51h51v-51h25v-50h-51v25M410 254v17h-33v34h-34v34h-34v270h34v34h34v34h33v34h204v-34h33v-34h34v-34h34v-67h-68v33h-33v34h-34v34H444v-34h-34v-34h-33V372h33v-33h34v-34h136v34h34v33h33v34h68v-67h-34v-34h-34v-34h-33v-34H410v17m0 503.5V770h76v51h-76v25h75.976l.262 38.25.262 38.25h51l.262-38.25.262-38.25H614v-25h-76v-51h76v-25H410v12.5"
    />
    <style jsx>{`
      svg {
	mask-image: linear-gradient(
	  60deg,
	  black 25%,
	  rgba(0, 0, 0, 0.2) 50%,
	  black 75%
	);
	mask-size: 400%;
	mask-position: 0%;
      }
      svg:hover {
	mask-position: 100%;
	transition:
	  mask-position 1s ease,
	  -webkit-mask-position 1s ease;
      }
      `}</style>
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/cyberyen-org/cyberyen.org'
  },
  docsRepositoryBase: 'https://github.com/cyberyen-org/cyberyen.org/tree/master/',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
	titleTemplate: '%s – Cyberyen'
      }
    }
  },

  darkMode: false,
  primarySaturation: 0,

  nextThemes: {
    defaultTheme: "dark",
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    return (
      <>
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
	name="description"
	content="Cyberyen is an alternative payment network based on Blockchain Technology. Find all you need to know and get started with Cyberyen on cyberyen.org."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="cyberyen.org" />
      <meta name="twitter:url" content="https://cyberyen.org" />
      <meta name="apple-mobile-web-app-title" content="Cyberyen" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
	return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
	<p className="mt-6 text-xs">
	  © Cyberyen 2022-{new Date().getFullYear()} Released under the MIT license.
	</p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
