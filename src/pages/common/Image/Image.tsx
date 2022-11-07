import React from "react";

interface IProps {
  src: string;
  className: string;
  alt: string;
}

const Image = ({ src, className, alt }: IProps) => {
  return <img src={src} className={className} alt={alt} loading="lazy" />;
};

export default Image;
