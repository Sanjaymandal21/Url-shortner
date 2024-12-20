import redirectUrl from "./url/redirect.js"
import { shrinkUrl } from "./url/shrink.js"
import viewsOnUrl from "./url/views.js"

const urlController={
    shrink: shrinkUrl,
    redirect: redirectUrl,
    views:viewsOnUrl,
}
export default urlController