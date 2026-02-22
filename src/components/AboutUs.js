import { FaHeartPulse, FaHospital, FaStethoscope, FaUsers, FaAward, FaGlobe } from 'react-icons/fa6';

const AboutUs = () => {
  const features = [
    {
      icon: <FaHospital className="text-3xl" />,
      title: 'Hospital Network',
      description: 'Connect with leading hospitals and healthcare facilities across the country'
    },
    {
      icon: <FaStethoscope className="text-3xl" />,
      title: 'Expert Doctors',
      description: 'Access verified and experienced medical professionals at your convenience'
    },
    {
      icon: <FaHeartPulse className="text-3xl" />,
      title: 'Real-time Availability',
      description: 'Check bed availability, doctor schedules, and book appointments instantly'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Patient Care',
      description: 'Comprehensive health management from consultation to recovery support'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Quality Assured',
      description: 'Verified facilities and certified healthcare providers for your safety'
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: '24/7 Availability',
      description: 'Round-the-clock support and emergency services available always'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About MedLink</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing healthcare accessibility by connecting patients with trusted hospitals, 
            experienced doctors, and comprehensive medical services in one unified platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              At MedLink, our mission is to make quality healthcare accessible to everyone. We believe that 
              finding the right medical care should be simple, transparent, and convenient.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Through our innovative platform, we eliminate barriers between patients and healthcare providers, 
              enabling faster diagnoses, quicker treatment, and better health outcomes for all.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">✓</span>
                <span className="text-slate-700">Real-time hospital bed availability tracking</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">✓</span>
                <span className="text-slate-700">Seamless doctor appointment booking system</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">✓</span>
                <span className="text-slate-700">Secure health records management</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 flex items-center justify-center min-h-96">
            <div className="text-7xl">🏥</div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Trust</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize transparency and security in every interaction, ensuring patient data is protected and all information is accurate.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Accessibility</h3>
              <p className="text-slate-600 leading-relaxed">
                Healthcare should be available to everyone. We work to break down barriers and make medical services accessible to all.
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-600 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                We maintain the highest standards of service quality and continuously innovate to improve healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">1520+</p>
            <p className="text-blue-100">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-blue-100">Verified Doctors</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">200+</p>
            <p className="text-blue-100">Partner Hospitals</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-blue-100">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-slate-900">Our Commitment</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Every member of the MedLink team is dedicated to improving healthcare accessibility and quality. 
            We are committed to continuous innovation, maintaining the highest ethical standards, and putting patient 
            wellbeing at the center of everything we do.
          </p>
          <div className="pt-8">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
