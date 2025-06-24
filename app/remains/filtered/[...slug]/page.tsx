type Props = {
  params: Promise<{ slug: string[] }>;
};
async function FilteredRemains({ params }: Props) {
  const slug = await params;
  console.log(slug);
  return <h2>FilteredRemains</h2>;
}

export default FilteredRemains;
