/** @jsx jsx */
import { jsx } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

export default function FileDownloader({ link }) {
  const meta = useSiteMetadata();
  return (
    <a href={link} sx={{
      border: '1px solid',
      p: 3,
      cursor: 'pointer',
      borderRadius: 5,
      color: 'primary',
      fontFamily: 'system-ui, sans-serif',
      textDecoration: "none",
    }}>
      {meta.downloadFilesLabel}
    </a>
  );
}