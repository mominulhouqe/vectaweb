

const resources = [
    // Array of resource objects
 id:"1",
 title:"hello",
  ];
  
  const ResourcesSection = () => (
    <section id="resources" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Downloadable Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
            <p className="mb-4">{resource.description}</p>
            <a href={resource.fileUrl} download className="inline-block px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">Download</a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default ResourcesSection;
  