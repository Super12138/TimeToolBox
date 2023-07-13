import { scrollTo } from "./page";
export function showDialog(title, content, isScroll) {
    mdui.dialog({
        title: title,
        content: content,
        modal: true,
        buttons: [
            {
                text: '确认',
                onClick: () => {
                    if (isScroll) {
                        scrollTo('#outputTitle');
                    }
                }
            }
        ]
    });
}