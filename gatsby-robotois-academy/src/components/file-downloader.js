/** @jsx jsx */
import { jsx } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';

export default function FileDownloader({ link }) {
  const meta = useSiteMetadata();
  console.log(meta);

  return (
    <a href={link} sx={{
      border: '1px solid',
      p: 4,
      cursor: 'pointer',
      borderRadius: 5,
      color: 'primary'
    }}>
      {meta.downloadFilesLabel}
    </a>
  );
}