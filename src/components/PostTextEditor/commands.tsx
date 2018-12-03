import { Inline } from "slate";

import { getPreviousNode, isFirstCharOfNode } from "./queries";

export const focusPreviousInlineNode = (editor: any) => {
  if (isFirstCharOfNode(editor)) {
    const previousNode = getPreviousNode(editor);
    if (previousNode && Inline.isInline(previousNode)) {
      editor.moveToEndOfNode(previousNode).normalize(document);
    }
  }
};