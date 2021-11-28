import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from 'next/image';
import image from 'next/image';
import { uriTransformer } from 'react-markdown';

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h3',
        component: 'h2',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h5', component: 'h3' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
    img: {
      props: {
        className: 'content-image'
      }
    }
  },
};


export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}