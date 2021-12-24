import { StructureBuilder as S } from "@sanity/structure";
import Iframe from "sanity-plugin-iframe-pane";
import resolvePreviewUrl from "../lib/resolvePreviewUrl";
import { GrView as EditIcon } from "react-icons/gr";
import { FiSettings as SettingsIcon } from "react-icons/fi";
import { GoLaw as LegalIcon } from "react-icons/go";
import Blog from "./blog";

export const IframePreview = () => {
  return S.view
    .component(Iframe)
    .options({ url: (doc) => resolvePreviewUrl(doc) })
    .title("Preview");
};

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === "post") {
    return S.document().views([
      S.view.form().icon(EditIcon),
      S.view
        .component(Iframe)
        .options({ url: (doc) => resolvePreviewUrl(doc) })
        .title("Preview"),
    ]);
  }
  return S.document().views([S.view.form().icon(EditIcon)]);
};

export default () =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .icon(SettingsIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      Blog(S),
      S.divider(),
      S.documentTypeListItem("class").title("Classes").schemaType("class"),
      S.documentTypeListItem("page").title("Home Pages").schemaType("page"),
      S.documentTypeListItem("person").schemaType("person"),
      S.documentTypeListItem("route").schemaType("route"),
      S.documentTypeListItem("legal")
        .title("Legal Terms & Conditions")
        .schemaType("legal")
        .icon(LegalIcon),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "post",
            "author",
            "category",
            "class",
            "legal",
            "person",
            "page",
            "route",
          ].includes(listItem.getId())
      ),
    ]);
