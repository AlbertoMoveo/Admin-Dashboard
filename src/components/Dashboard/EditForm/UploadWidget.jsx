import { useEffect, useRef } from "react";

const UploadWidget = ({ onSuccess }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dmn3ywznp',
            uploadPreset: 'rvjv5idk'
        }, function(error, result) {
            if (!error && result && result.event === "success") {
                onSuccess(result.info.url);
            }
        })
    }, [onSuccess])

    return (
        <button type="button" onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;
