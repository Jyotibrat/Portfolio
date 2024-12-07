import React from "react";
import styled from "styled-components";

const timelineData = [
    {
        year: "Oct 02, 2024",
        title: "Started Open Source Journey",
        description: "Got Selected for GSSOC '24 Extd.",
        image: "/BINDUPAUTRA_JYOTIBRAT_Badge_Contributor_GSSoC2024_Extd.png",
        link: "https://www.linkedin.com/posts/bindupautra-jyotibrat-a65693289_gssoc2024-opensource-girlscript-activity-7247261065363832832-WPlD?utm_source=share&utm_medium=member_desktop",
    },
    {
        year: "Oct 06, 2024",
        title: "First Hacktoberfest",
        description: "Registered for Hacktoberfest '24",
        image: "/Hacktoberfest24_Register_Badge.png", // Example image
        link: "https://www.linkedin.com/posts/bindupautra-jyotibrat-a65693289_i-got-the-hacktoberfest-2024-level-4-badge-activity-7259931815254130688-wr4p?utm_source=share&utm_medium=member_desktop",
    },
    {
        year: "Oct 13, 2024",
        title: "First Pull Request Merged",
        description: "First Pull Request Merged for Open Source",
        image: "/First_Pull_Request_Merged.png",
        link: "https://github.com/Pradeepsingh61/DSA_Code/pull/81",
    },
    {
        year: "Oct 20, 2024",
        title: "First Merged Hacktoberfest Badge",
        description: "Got my First Pull Request Merged Badge from Hacktoberfest '24",
        image: "/First_Pull_Request_Merged_Badge.png",
        link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm2jdipsp64430cmc9desd7xc",
    },
    {
        year: "Oct 21, 2024",
        title: "Second Merged Hacktoberfest Badge",
        description: "Got my Second Pull Request Merged Badge from Hacktoberfest '24",
        image: "/Second_Pull_Request_Merged_Badge.png",
        link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm2jdipqs64370cmcrjr4rgbn",
    },
    {
        year: "Oct 23, 2024",
        title: "Third Merged Hacktoberfest Badge",
        description: "Got my Third Pull Request Merged Badge from Hacktoberfest '24",
        image: "/Third_Pull_Request_Merged_Badge.png",
        link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm2lrn2a120610cjt47f24541",
    },
    {
        year: "Oct 23, 2024",
        title: "Final Merged Hacktoberfest Badge",
        description: "Got my Final Pull Request Merged Badge from Hacktoberfest '24",
        image: "/Final_Pull_Request_Merged_Badge.png",
        link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm35yl1bc264040cl9liflhprw",
    },
    {
        year: "Oct 31, 2024",
        title: "First Hacktoberfest Journey Finished",
        description: "Completed my Hacktoberfest '24 Journey",
    },
    {
        year: "Nov 10, 2024",
        title: "GSSOC '24 Extd Finished",
        description: "Completed GSSOC '24 Extd. Made multiple Open Source Contributions.",
    },
];

// Styled component for the scrollable area
const ScrollableDiv = styled.div`
    height: 400px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f13024;
        border-radius: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: #f13024 transparent;
`;

const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TimelineLine = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: #f13024;
`;

const TimelineItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ align }) => (align === "left" ? "flex-end" : "flex-start")};
    width: 100%;
    margin-bottom: 40px;
    position: relative;

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background-color: #f13024;
        border: 2px solid white;
        border-radius: 50%;
    }

    .card {
        background: rgba(65, 47, 123, 0.15);
        padding: 16px 24px;
        border-radius: 12px;
        transition: all 0.3s ease;
        text-align: ${({ align }) => (align === "left" ? "right" : "left")};
        max-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        cursor: pointer;

        &:hover {
            background: rgba(89, 65, 169, 0.15);
        }

        img {
            width: 100%;
            border-radius: 8px;
        }

        h3 {
            color: white;
            margin-bottom: 4px;
        }

        h4 {
            color: red;
            margin-bottom: 4px;
            font-size: 18px;
            font-weight: bold;
        }

        p {
            color: gray-900;
            font-size: 17px;
            margin-bottom: 12px;
        }

        button {
            background-color: #593ea9;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #412f7b;
            }
        }
    }
`;

const Timeline = () => {
    return (
        <ScrollableDiv>
            <TimelineContainer>
                <TimelineLine />
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} align={index % 2 === 0 ? "left" : "right"}>
                        <div className="card">
                            {item.image && <img src={item.image} alt={item.title} />}
                            <h3>{item.year}</h3>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            {item.link && (
                                <button onClick={() => window.open(item.link, "_blank")}>
                                    Learn More
                                </button>
                            )}
                        </div>
                        <div className="circle"></div>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </ScrollableDiv>
    );
};

export default Timeline;