import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectManagement from './components/ProjectManagement';
import WorkTogether from './components/WorkTogether';
import Customise from './components/Customise';
import Pricing from './components/Pricing';
import YourWork from './components/YourWork';
import DataSecurity from './components/DataSecurity';
import Sponsors from './components/Sponsors';
import AppsIntegration from './components/AppsIntegration';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen font-inter w-full overflow-hidden">
            <Navbar />
            <main>
                <Hero />
                <ProjectManagement />
                <WorkTogether />
                <Customise />
                <Pricing />
                <YourWork />
                <DataSecurity />
                <Sponsors />
                <AppsIntegration />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

export default App;
