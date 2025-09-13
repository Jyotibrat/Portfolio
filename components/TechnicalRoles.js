import React from "react";

const TechnicalRoles = () => {
    const roles = [
        {
            title: "Project Admin in GSSOC '25",
            joined: "Jul 01, 2025",
            left: "Present",
            description: "Participated in GirlScript Summer of Code 2025 as a Project Admin.",
        },
        {
            title: "Technical Team Lead in North East Club VITB",
            joined: "Jan 01, 2025",
            left: "Present",
            description: "Technical Team Lead at North East Club VITB, contributing to projects and events.",
        },
        {
            title: "Technical Team Co-Lead in GSoC Innovators Club VITB",
            joined: "Apr 01, 2025",
            left: "Present",
            description: "Technical Team Co-Lead at GSoC Innovators Club VITB, contributing to projects and events.",
        },
        {
            title: "Contributor in VIT Bhopal AI Innovators Hub",
            joined: "Jul 01, 2025",
            left: "Present",
            description: "Participated in VIT Bhopal AI Innovators Hub's Project as a contributor.",
        },
        {
            title: "Technical Team Member in VIT Bhopal AI Innovators Hub",
            joined: "Feb 01, 2025",
            left: "Present",
            description: "Technical Team Member at VIT Bhopal AI Innovators Hub, contributing to projects and events.",
        },
        {
            title: "Contributor in SSOC '25",
            joined: "Jun 01, 2025",
            left: "Present",
            description: "Participated in Social Summer of Code 2025 as a Contributor.",
        },
        {
            title: "Virtual Intern at Deloitte",
            joined: "Jul 01, 2025",
            left: "Aug 01, 2025",
            description: "Completed Virtual Internship at Deloitte.",
        },
        {
            title: "Intern at The Red Users",
            joined: "Apr 01, 2025",
            left: "May 01, 2025",
            description: "Completed CyberSecurity Internship at The Red Users.",
        },
        {
            title: "Bitcoin Development Trainee at Summer of Bitcoin '25",
            joined: "Feb 01, 2025",
            left: "Mar 01, 2025",
            description: "Participated in Summer of Bitcoin 2025 as a Bitcoin Development Trainee.",
        },
        {
            title: "Technical Team Member in GSoC Innovators Club VITB",
            joined: "Feb 01, 2025",
            left: "Apr 01, 2025",
        },
        {
            title: "Contributor in SWOC '25 ",
            joined: "Jan 01, 2025",
            left: "Mar 01, 2025",
            description: "Participated in Social Winter of Code 2025 as a contributor.",
        },
        {
            title: "Project Admin in SWOC '25 ",
            joined: "Jan 01, 2025",
            left: "Feb 01, 2025",
            description: "Participated in Android Club VITB Winter of Code 2025 as a Project Admin.",
        },
        {
            title: "Contributor in ACWOC '25 ",
            joined: "Jan 01, 2025",
            left: "Feb 01, 2025",
            description: "Participated in Android Club VITB Winter of Code 2025 as a contributor.",
        },
        {
            title: "Technical Team Member in North East Club VITB",
            joined: "Oct 16, 2024",
            left: "Jan 01, 2025",
            description: "Technical Team Member at North East Club VITB, contributing to projects and events.",
        },
        {
            title: "Contributor in Hacktoberfest '24",
            joined: "Oct 06, 2024",
            left: "Oct 31, 2024",
            description: "Completed Hacktoberfest '24 with 5 PRs merged.",
        },
        {
            title: "Contributor in GSSOC '24 Extd.",
            joined: "Oct 02, 2024",
            left: "Nov 10, 2024",
            description: "Technical Team Member at GSoC Innovators Club VITB, contributing to projects and events.",
            description: "Participated in GirlScript Summer of Code 2024 as a contributor.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto bg-transparent text-white p-4 rounded-lg">
            {/* Roles Section with Scrollable Container */}
            <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="flex flex-col space-y-2 pr-2">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            className="p-4 bg-[rgba(65,47,123,0.15)] rounded-md shadow-md text-center flex-shrink-0"
                        >
                            <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                            <div className="text-xs text-white/70 mb-2">
                                <p>
                                    <span className="text-sm font-semibold">Joined:</span> {role.joined}
                                </p>
                                <p>
                                    <span className="text-sm font-semibold">Left:</span> {role.left}
                                </p>
                            </div>
                            <p className="text-xl text-white/80">{role.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalRoles;
