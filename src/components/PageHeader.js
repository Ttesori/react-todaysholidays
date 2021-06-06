import { useEffect, useState } from 'react';

export default function PageHeader({ searchTerm }) {
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    setIsSearch(!searchTerm)
  }, [searchTerm]);
  return (
    <h1>
      {!isSearch && `Results for '${searchTerm}'`}
      {isSearch && `Celebrate 🎉 `}
      {isSearch && <span>Every day is a holiday!</span>}
    </h1>
  )
}
