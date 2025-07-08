import DetailsTemplate from "work/components/ui/details-template";
import ContentList from "work/components/ui/content-list";

export default function Description() {
  return (
    <DetailsTemplate title="Responsibilities">
      <ContentList>
        <li>
          Developed the frontend using <span className="highlight">React</span>, ensuring a responsive and user-friendly interface.
        </li>
        <li>
          Built the admin panel with <span className="highlight">Node.js</span>, <span className="highlight">Handlebars</span>, and <span className="highlight">MongoDB</span> for backend logic and database management.
        </li>
        <li>
          Implemented product catalog, cart functionality, and checkout process.
        </li>
        <li>
          Designed and integrated user authentication and role-based access control (RBAC) for the admin panel.
        </li>
        <li>
          Managed database operations (CRUD) for products, categories, orders, and users.
        </li>
        <li>
          Ensured secure data handling and payment processing (if applicable).
        </li>
        <li>
          Optimized performance and ensured cross-browser compatibility.
        </li>
      </ContentList>
    </DetailsTemplate>
  );
}
