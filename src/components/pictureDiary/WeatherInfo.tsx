import {useState} from 'react';

import classNames from 'classnames/bind';

import icon_cloud from '@/assets/weather/cloud.png';
import icon_cloud_selected from '@/assets/weather/cloud_selected.png';
import icon_rain from '@/assets/weather/rain.png';
import icon_rain_selected from '@/assets/weather/rain_selected.png';
import icon_snow from '@/assets/weather/snow.png';
import icon_snow_selected from '@/assets/weather/snow_selected.png';
import icon_sun from '@/assets/weather/sun.png';
import icon_sun_selected from '@/assets/weather/sun_selected.png';
import {isSavingState} from '@/states';
import {useRecoilValue} from 'recoil';

import styles from './WeatherInfo.module.scss';

const cx = classNames.bind(styles);

export enum EWeather {
    SUN = 'sun',
    CLOUD = 'cloud',
    RAIN = 'rain',
    SNOW = 'snow',
}

interface WeatherInputProps {
    type: EWeather;
    value: EWeather;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: string;
    iconSelected: string;
}

function WeatherInput({value, type, onChange, icon, iconSelected}: WeatherInputProps) {
    const isSaving = useRecoilValue(isSavingState);

    const renderIcon = () => (
        <img src={value !== type ? icon : iconSelected} alt="sun" width={35} height={35} className={cx('icon')} />
    );

    return (
        <>
            {!isSaving ? (
                <label className={cx('label')}>
                    <input
                        type="radio"
                        name="weather"
                        value={type}
                        className={cx('input')}
                        onChange={onChange}
                        checked={value === type}
                    />
                    {renderIcon()}
                </label>
            ) : (
                <div className={cx('label')}>{renderIcon()}</div>
            )}
        </>
    );
}

function WeatherInfo() {
    const [weatherValue, setWeatherValue] = useState<EWeather>(EWeather.SUN);

    const changeWeather = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setWeatherValue(value as EWeather);
    };

    return (
        <div className={cx('article')}>
            <WeatherInput
                value={weatherValue}
                type={EWeather.SUN}
                onChange={changeWeather}
                icon={icon_sun}
                iconSelected={icon_sun_selected}
            />
            <WeatherInput
                value={weatherValue}
                type={EWeather.CLOUD}
                onChange={changeWeather}
                icon={icon_cloud}
                iconSelected={icon_cloud_selected}
            />
            <WeatherInput
                value={weatherValue}
                type={EWeather.RAIN}
                onChange={changeWeather}
                icon={icon_rain}
                iconSelected={icon_rain_selected}
            />
            <WeatherInput
                value={weatherValue}
                type={EWeather.SNOW}
                onChange={changeWeather}
                icon={icon_snow}
                iconSelected={icon_snow_selected}
            />
        </div>
    );
}

export default WeatherInfo;
