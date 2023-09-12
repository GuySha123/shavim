import { VisionContainer, VisionContent } from './Introduction.styles';

const Introduction = () => {
    return (
        <>
            <h2>החזון</h2>
            <VisionContainer>
                <VisionContent>חינוך</VisionContent>
                <VisionContent>תרובות</VisionContent>
                <VisionContent>ביטחון</VisionContent>
                <VisionContent>תחבורה</VisionContent>
                <VisionContent>תשתיות</VisionContent>
                <VisionContent>קיימות</VisionContent>
            </VisionContainer>
        </>
    );
};

export default Introduction;
