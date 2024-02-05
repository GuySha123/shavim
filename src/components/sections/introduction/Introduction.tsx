import ShavimLogoHeadingSecond from '../../logo/ShavimLogoHeadingSecond';
import {
    HeadPartyWordsContentContainer,
    PartysValueContainer,
    ValueHeading,
    ValueInfo,
} from './Introduction.styles';

//TODO: Change the json file to TS

type ValueText = {
    'value-name': string;
    title: string;
    text: string;
};

type IntroductionProps = {
    data: ValueText[];
};

const Introduction = ({ data }: IntroductionProps) => {
    return (
        <HeadPartyWordsContentContainer>
            {data.map((item, index) => (
                <ValueInfo key={index}>
                    <PartysValueContainer title={item.title}>
                        <ShavimLogoHeadingSecond />{' '}
                        <ValueHeading>{item['value-name']}</ValueHeading>
                    </PartysValueContainer>
                    <p>{item.text}</p>
                </ValueInfo>
            ))}
        </HeadPartyWordsContentContainer>
    );
};

export default Introduction;
