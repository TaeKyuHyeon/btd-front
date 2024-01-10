import ContentWrapper from '@/components/common/ContentWrapper';
import logo from '@/assets/logo.png';

function Pages() {
    return (
        <ContentWrapper>
            <img src={logo} alt="내가그린 그림일기" width="200" height="auto" />
        </ContentWrapper>
    );
}

export default Pages;

