import React from "react";

const TechnicalRoles = () => {
    const roles = [
        {
            title: "Contributor in GSSOC '24 Extd.",
            joined: "Oct 02, 2024",
            left: "Nov 10, 2024",
            description: "Participated in GirlScript Summer of Code as a contributor.",
        },
        {
            title: "Contributor in Hacktoberfest '24",
            joined: "Oct 06, 2024",
            left: "Oct 31, 2024",
            description: "Completed Hacktoberfest '24 with 5 PRs merged.",
        },
        {
            title: "Technical Team Member in North East Club",
            joined: "Oct 16, 2024",
            left: "Ongoing",
            description: "Technical team member at VIT Bhopal, contributing to projects and events.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto bg-transparent text-white h-85 p-4 rounded-lg">
        {/* Roles Section */}
        <div className="flex flex-col space-y-2">
            {roles.map((role, index) => (
            <div
                key={index}
                className="p-4 bg-[rgba(65,47,123,0.15)] rounded-md shadow-md text-center"
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
    );
};

export default TechnicalRoles;