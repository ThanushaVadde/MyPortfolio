const experienceList = ['Developing dynamic and interactive UI components using ReactJS, Angular, HTML5, CSS3, and JavaScript. Implementing responsive design principles to ensure optimal user experience across various devices. Deploying code using Jenkins and managing code repository in version control systems like Bitbucket for efficient code management and collaboration. Integrating APIs and data sources using Postman to retrieve and display information. Utilizing Solr for search functionality within applications. Monitoring application performance with Instana and implementing improvements based on insights. Leveraged Hippo CMS for content management and integration with the frontend. Implementing datalayer events on website and landing pages to track user interactions and behavior. Utilizing SendGrid to create and execute targeted email campaigns for a variety of clients. Tracking project progress and managed tasks using Jira, ensuring on-time and high-quality deliverables. Working within an agile methodology, actively participating in sprints and daily stand-up meetings.'];
  
  export default function ListExperienceFunc() {
    const listItems = experienceList.map(experience =>
      <li>{experience}</li>
    );
    return <ul>{listItems}</ul>;
  }