import Resizer from "react-image-file-resizer";

export const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            200,
            200,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
});