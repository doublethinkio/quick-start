import React, { useMemo } from 'react'
import { Global, css } from '@emotion/core'
import { monospace, sansSerif } from 'app/common/helper/css'
import './app.global.css'

export const GlobalCss: React.FC = () =>
  useMemo(
    () => (
      <Global
        styles={css`
          body {
            position: relative;
            margin: 0;
            height: 100vh;
            background: black;
            color: white;
            overflow-x: hidden;
            overflow-y: hidden;
            ${sansSerif()}
          }

          #root {
            height: 100%;
          }

          h2 {
            margin: 0;
            font-size: 2.25rem;
            font-weight: bold;
            letter-spacing: -0.025em;
            color: #fff;
          }

          p {
            font-size: 24px;
          }

          li {
            list-style: none;
          }

          a {
            color: white;
            opacity: 0.75;
            text-decoration: none;
          }

          a:hover {
            opacity: 1;
            text-decoration: none;
            cursor: pointer;
          }

          pre,
          code {
            ${monospace('Fira Code', 'source-code-pro')}
          }
        `}
      />
    ),
    []
  )

export default GlobalCss
