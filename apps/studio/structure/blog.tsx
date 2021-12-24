import { StructureBuilder } from "@sanity/structure";
import { ImBlog as PostIcon } from "react-icons/im";
import {
  FiPenTool as BlogIcon,
  FiArchive as AllIcon,
  FiUser as AuthorIcon,
  FiHash as CategoryIcon,
} from "react-icons/fi";
export default (S: typeof StructureBuilder) =>
  S.listItem()
    .title("Blog")
    .icon(PostIcon)
    .child(
      S.list()
        .title("/blog")
        .items([
          S.listItem()
            .title("Published posts")
            .schemaType("post")
            .icon(BlogIcon)
            .child(
              S.documentList()
                .title("Published posts")
                .menuItems(S.documentTypeList("post").getMenuItems())
                // Only show posts with publish date earlier than now and that is not drafts
                .filter(
                  '_type == "post" && publishedAt < now() && !(_id in path("drafts.**"))'
                )
                .child((documentId) =>
                  S.document().documentId(documentId).schemaType("post")
                )
            ),
          S.documentTypeListItem("post").title("All posts").icon(AllIcon),
          S.listItem()
            .title("Posts by category")
            .child(
              // List out all categories
              S.documentTypeList("category")
                .title("Posts by category")
                .child((catId) =>
                  // List out project documents where the _id for the selected
                  // category appear as a _ref in the project’s categories array
                  S.documentList()
                    .schemaType("post")
                    .title("Posts")
                    .filter('_type == "post" && $catId in categories[]._ref')
                    .params({ catId })
                )
            ),
          S.divider(),
          S.documentTypeListItem("category")
            .title("Categories")
            .icon(CategoryIcon),
          S.listItem()
            .icon(AuthorIcon)
            .title("Authors")
            .child(
              S.documentList()
                .id("blog-authors")
                .schemaType("person")
                .filter('_type == "person" && role == "author"')
            ),
        ])
    );
