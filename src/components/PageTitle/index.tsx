import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 121 Chat` : '121 Chat';
  }, [title]);

  return null;
});

export default PageTitle;
