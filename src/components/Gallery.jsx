const Gallery = (props) => {
  const { link, src, alt } = props;
  return (
    <li className="basis-1/3 p-[20px] md:p-[5px]">
      <a href={link}>
        <img
          src={src}
          alt={alt}
          className="w-full"
        />
      </a>
    </li>
  );
};

export default Gallery;
