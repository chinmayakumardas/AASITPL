// app/about/page.js


export default function AutherPage() {
  return (
    <div className="h-full w-full">
       {/* Technical Research Reports Section */}
    <section className="flex items-center justify-center w-full h-screen bg-gray-100">
      <h2 className="text-5xl font-bold">Auther Research Reports</h2>
    </section>
    {/* Market Trends Analysis Section */}
    <section className="flex items-center justify-center w-full h-screen bg-blue-500">
      <h1 className="text-6xl font-bold text-white">Market Trends Analysis</h1>
    </section>


    {/* Webinars & Online Workshops Section */}
    <section className="flex items-center justify-center w-full h-screen bg-green-200">
      <h2 className="text-5xl font-bold">Webinars & Online Workshops</h2>
    </section>
    </div>
  );
}
