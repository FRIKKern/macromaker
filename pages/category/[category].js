const Category = ({ category, name }) => {
  return (
    <div>
      <h1>
        Category {category} {name}{" "}
      </h1>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const paths = [
    { params: { category: "druid" } },
    { params: { category: "rogue" } },
    { params: { category: "warrior" } },
    { params: { category: "monk" } },
    { params: { category: "priest" } },
  ];

  return { paths, fallback: ftrue };
}

export async function getStaticProps(params) {
  const category = params.params.category;
  return {
    props: { category, name: "wut" },
  };
}
