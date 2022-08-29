import React, { useRef, useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { human } from "react-native-typography";
import Video from "react-native-video";
import VisibilitySensor from "@svanboxel/visibility-sensor-react-native";


const Media = ({ type, data, isPunchline, isPunchlined, preview }) => {

    const [paused, setPaused] = useState(true);
    const video = useRef(null);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            video.current.seek(0);
            setPaused(false);
        } else {
            setPaused(true);
        }
    }

    switch (type) {
        case 'text':
            return !isPunchline
                ? <Text style={[styles.text, { display: isPunchlined ? 'none' : 'flex' }]}>
                    {data}
                </Text> //setup
                : <Text style={[styles.text, { display: isPunchlined ? 'flex' : 'none', position: "absolute" }]}>
                    {data}
                </Text> //punchline
        case 'image':
            return !isPunchline
                ? <Image style={[styles.image, { display: isPunchlined ? 'none' : 'flex' }]}
                    source={data} /> //setup
                : <Image style={[styles.image, { display: isPunchlined ? 'flex' : 'none', position: "absolute" }]}
                    source={data} /> //punchline
        case 'video':
            return !isPunchline
                ? <VisibilitySensor style={[styles.video, { display: isPunchlined ? 'none' : 'flex' }]} onChange={handleVisibilityChange}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={data}
                        resizeMode='contain'
                        paused={paused}
                        muted={preview}
                    />
                </VisibilitySensor> //setup

                : <VisibilitySensor style={[styles.video, { display: isPunchlined ? 'flex' : 'none', position: "absolute" }]} onChange={handleVisibilityChange}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={data}
                        resizeMode='contain'
                        paused={paused}
                    />
                </VisibilitySensor> //punchline
        default:
            console.error('Unknown or unsupported media type.');
            break;
    }
    return <Text>media</Text>
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain",
    },
    text: {
        ...human.bodyWhite,
        marginHorizontal: "10%",
        textAlign: "center",
    },
    video: {
        width: '100%',
        height: '100%'
    }
});

export default Media;