/* eslint-disable implicit-arrow-linebreak */
import React, { ElementType } from 'react';

const withExtraClass = (extraClass: Record<string, string | number>) => (Component: ElementType) =>
  function WithExtraClass({ links }: { links: TypeLink[] }) {
    return <Component links={links} extraClass={extraClass} />;
  };

export default withExtraClass;
