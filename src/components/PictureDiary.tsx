// import classNames from 'classnames/bind';

// import styles from './PictureDiary.module.scss';

// const cx = classNames.bind(styles);

function PictureDiary() {
    return (
        <div className="article">
            <div className="box">
                <div className="info_area">
                    <div className="date">
                        <input type="date" />
                        <div className="year">년</div>
                        <div className="month">월</div>
                        <div className="date">일</div>
                        <div className="day">요일</div>
                    </div>
                    <div className="weather">
                        <input type="radio" id="sun" name="weather" />
                        <input type="radio" id="cloud" name="weather" />
                        <input type="radio" id="rain" name="weather" />
                        <input type="radio" id="snow" name="weather" />
                    </div>
                </div>
                <div className="image_area">
                    <input type="file" />
                </div>
                div.
            </div>
        </div>
    );
}

export default PictureDiary;
