export default function CollectionItem({ title, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 flex items-center justify-center sm:aspect-w-3 sm:aspect-h-2">
        <span className="text-gray-500 text-sm sm:text-base">Image Placeholder</span>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{price}</p>
      </div>
    </div>
  );
}