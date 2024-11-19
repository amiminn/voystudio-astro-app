export default function ProductPage() {
  const product = [
    {
      name: "IOT LED Switcher",
      harga: 1,
      deskripsi: "",
      star: 5,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-3">
        {product.map((item, index: number) => {
          return (
            <div key={index}>
              <div className="p-4 border dark:border-white rounded">
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
