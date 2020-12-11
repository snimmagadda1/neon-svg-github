import React from "react";
import styled from "styled-components";

const SvgStyles = styled.div`
  background-color: ${(props) => (props.dark ? "060A0E" : "#fff")};
  position: relative;

  /* Toggle */
  .toggle {
    position: absolute;
    left: 45%;
    top: 40%;
    width: 110px;
    height: 60px;
    border: 4px solid #d1d5d9;
    color: transparent;
    display: flex;
    border-radius: 60px;
  }

  .toggle.active {
    border: 4px solid #3b1e70;
    background-color: #271052;
  }

  .frame {
    margin: 4px 2px;
    position: relative;
  }

  .toggle .circle:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, -50%, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .toggle .circle {
    cursor: pointer;
    position: absolute;
    height: 77px;
    width: 77px;
    background-color: #060a0e;
    border-radius: 50%;
    top: 50%;
    left: -13px;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s linear;
  }

  .toggle .circle.active {
    background-color: #6e40c9;
    transform: translate(80%, -50%);
  }

  .moon {
    width: 50px;
  }

  /* SVGs */
  .grass.active {
    stroke: #da3633;
    stroke-dasharray: 1000;

    stroke-dashoffset: 1000;
    animation: dash 0.1s ease-in forwards;
  }

  .building.active {
    stroke: #db61a2;
  }

  .bush.active {
    stroke: #f0883e;
  }

  .star.active {
    stroke: #e3b341;
  }

  .eye.active {
    stroke: #f0883e;
    fill: #f0883e;
    transition: 0.3s linear;
  }

  .octo.active {
    stroke: #6f40c9;
    animation: octoflicker 2s linear infinite;
  }

  .star.active {
    stroke: #e3b340;
    fill: #e3b340;
    transition: 0.1s ease-in;
  }

  .cats.active {
    stroke: #3fb950;
    animation: catflicker 2s linear infinite;
  }

  .clouds.active {
    stroke: #388bfd;
  }

  .connector.active {
    stroke: #f0883e;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes octoflicker {
    0% {
      opacity: 0.1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    6% {
      opacity: 1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    10% {
      opacity: 0.1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }

    16% {
      opacity: 1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    70% {
      opacity: 0.5;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    100% {
      opacity: 1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
  }

  @keyframes catflicker {
    0% {
      opacity: 0.1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    2% {
      opacity: 1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
    8% {
      opacity: 0.1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }

    16% {
      opacity: 0.5;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }

    100% {
      opacity: 1;
      -webkit-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      -moz-box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
      box-shadow: 0px 0px 78px 4px rgba(16, 134, 232, 0.73);
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, -50%, 0);
    }

    20%,
    80% {
      transform: translate3d(2px,-50%, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, -50%, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, -50%, 0);
    }
  }
`;

class DarkMode extends React.Component {
  state = {
    isDark: false,
    activeGrass: false,
    activeBuilding: false,
    activeBush: false,
    activeConnector: false,
    activeEye: false,
    activeOcto: false,
    activeStar: false,
    activeCats: false,
    activeClouds: false,
  };

  // H4cky but quick
  toggle = () => {
    if (this.state.isDark) {
      this.setState({
        isDark: false,
        activeGrass: false,
        activeBuilding: false,
        activeBush: false,
        activeConnector: false,
        activeEye: false,
        activeOcto: false,
        activeStar: false,
        activeCats: false,
        activeClouds: false,
      });
      document.body.style.backgroundColor = "#fff";
      return;
    }
    document.body.style.backgroundColor = "#060A0E";
    const {
      isDark,
      activeGrass,
      activeBuilding,
      activeBush,
      activeConnector,
      activeEye,
      activeOcto,
      activeStar,
      activeCats,
      activeClouds,
    } = this.state;
    this.setState({ isDark: true });
    // grass first
    setTimeout(() => {
      this.setState({ activeGrass: !activeGrass });
    }, 800);

    setTimeout(() => {
      this.setState({ activeBush: !activeBush });
    }, 1100);

    setTimeout(() => {
      this.setState({ activeCats: !activeCats });
    }, 1200);

    setTimeout(() => {
      this.setState({ activeClouds: !activeClouds });
    }, 1300);

    setTimeout(() => {
      this.setState({ activeConnector: !activeConnector });
    }, 1300);

    setTimeout(() => {
      this.setState({ activeEye: !activeEye });
    }, 1500);

    setTimeout(() => {
      this.setState({ activeBuilding: !activeBuilding });
    }, 1600);

    setTimeout(() => {
      this.setState({ activeOcto: !activeOcto });
    }, 1900);

    setTimeout(() => {
      this.setState({ activeStar: !activeStar });
    }, 2000);
  };

  // className={`grass ${activeGrass ? "active" : ""}`}

  render() {
    const {
      isDark,
      activeGrass,
      activeBuilding,
      activeBush,
      activeConnector,
      activeEye,
      activeOcto,
      activeStar,
      activeCats,
      activeClouds,
    } = this.state;
    return (
      <SvgStyles dark={isDark}>
        <svg
          width="205.42mm"
          height="117.52mm"
          version="1.1"
          viewBox="0 0 205.42 117.52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(12.38 -55.956)">
            <g fill="none" stroke="#d1d5d9">
              <g stroke-width="1.0583">
                <path
                  className={`grass ${activeGrass ? "active" : ""}`}
                  d="m-12.38 172.95h97.728c0.11103-16.993 13.918-30.71 30.911-30.71 8.8765 9e-5 16.884 3.7428 22.523 9.7401"
                />
                <path
                  className={`grass ${activeGrass ? "active" : ""}`}
                  d="m192.54 172.87h-24.573c-0.11088-12.083-9.9376-21.82-22.021-21.82-11.565 7e-5 -21.063 8.9194-21.954 20.278"
                />
                <path
                  className={`grass ${activeGrass ? "active" : ""}`}
                  d="m98.417 158.07a1.9287 3.143 58 0 1-3.6875 0.0299 1.9287 3.143 58 0 1 1.6434-3.3012 1.9287 3.143 58 0 1 3.6875-0.0299 1.9287 3.143 58 0 1-1.6434 3.3012z"
                />
              </g>
              <path
                className={`building ${activeBuilding ? "active" : ""}`}
                d="m188.4 149.79h4.0408v22.027"
                stroke-width="1.0583"
              />
              <path
                className={`building ${activeBuilding ? "active" : ""}`}
                d="m188.16 145.58h4.8836"
                stroke-width="1.0014"
              />
              <path
                className={`building ${activeBuilding ? "active" : ""}`}
                d="m188.37 141.35 3.9015-0.14287v-46.493"
                stroke-width="1.0583"
              />
              <path
                className={`building ${activeBuilding ? "active" : ""}`}
                d="m192.26 99.814-17.66 17.806 0.10704 54.258"
                stroke-width="1.0583"
              />
              <path
                className={`connector ${activeConnector ? "active" : ""}`}
                d="m172.83 161.22c-0.26725-0.28162 0.33618 0.1942 0 0-1.9326-1.1156-4.4037-0.4535-5.5195 1.479"
                stroke-width="1.0583"
              />
              <path
                className={`bush ${activeBush ? "active" : ""}`}
                d="m72.091 168.31c3.6444-1.7348 7.7756-8.2318 5.306-10.997-1.6114-1.616-5.0567-0.93374-8.205 1.6248 0.77588-4.9747 0.09341-9.0896-1.5559-9.3814-0.07303-0.0133-0.14738-0.0178-0.22293-0.0155v-1e-3c-1.5268 0.0521-3.3177 3.2219-4.2883 7.5902-2.8446-4.4651-6.7539-6.5623-8.915-4.7825-2.1493 1.7711-1.8282 6.7705 0.73396 11.43-3.0851 0.76296-5.0739 2.4681-5.0737 4.3499-6.8e-5 1.5266 2.3954 2.4095 4.479 2.3285"
                stroke-width="1.0583"
              />
            </g>
            <g
              className={`star ${activeStar ? "active" : ""}`}
              fill="#d1d5d9"
              fill-rule="evenodd"
              stroke="#d1d5d9"
            >
              <path
                transform="scale(.26458)"
                d="m268.29 522.95a3.1048 3.1048 0 0 0-3.1055 3.1055 3.1048 3.1048 0 0 0 0.0586 0.59375 7.0195 7.0195 0 0 1-2e-3 0 7.0195 7.0195 0 0 0-3.3125 3.4727 3.1048 3.1048 0 0 0-0.32031-0.0176 3.1048 3.1048 0 0 0-3.1055 3.1055 3.1048 3.1048 0 0 0 3.1055 3.1035 3.1048 3.1048 0 0 0 0.5664-0.0508 7.0195 7.0195 0 0 0 3.0938 2.9805 3.1048 3.1048 0 0 0-0.084 0.7168 3.1048 3.1048 0 0 0 3.1055 3.1035 3.1048 3.1048 0 0 0 3.1035-3.1035 3.1048 3.1048 0 0 0-0.0703-0.65821 7.0195 7.0195 0 0 0 3.1973-3.0039 3.1048 3.1048 0 0 0 0.3164 0.0156 3.1048 3.1048 0 0 0 3.1055-3.1035 3.1048 3.1048 0 0 0-3.1055-3.1055 3.1048 3.1048 0 0 0-0.0586 2e-3 7.0195 7.0195 0 0 0-3.4316-3.5156 3.1048 3.1048 0 0 0 0.0469-0.53516 3.1048 3.1048 0 0 0-3.1035-3.1055z"
                stroke-width="4"
              />
              <g stroke-width="1.0583">
                <path d="m28.591 76.772a0.82147 0.82147 0 0 0-0.82166 0.82166 0.82147 0.82147 0 0 0 0.01551 0.1571 1.8572 1.8572 0 0 1-5.29e-4 0 1.8572 1.8572 0 0 0-0.87643 0.91881 0.82147 0.82147 0 0 0-0.08475-0.0047 0.82147 0.82147 0 0 0-0.82166 0.82166 0.82147 0.82147 0 0 0 0.82166 0.82114 0.82147 0.82147 0 0 0 0.14986-0.01344 1.8572 1.8572 0 0 0 0.81855 0.78858 0.82147 0.82147 0 0 0-0.02222 0.18966 0.82147 0.82147 0 0 0 0.82166 0.82113 0.82147 0.82147 0 0 0 0.82114-0.82113 0.82147 0.82147 0 0 0-0.0186-0.17415 1.8572 1.8572 0 0 0 0.84594-0.79478 0.82147 0.82147 0 0 0 0.08371 0.0041 0.82147 0.82147 0 0 0 0.82166-0.82114 0.82147 0.82147 0 0 0-0.82166-0.82166 0.82147 0.82147 0 0 0-0.0155 5.29e-4 1.8572 1.8572 0 0 0-0.90796-0.93018 0.82147 0.82147 0 0 0 0.01241-0.14159 0.82147 0.82147 0 0 0-0.82114-0.82166z" />
                <path d="m100.59 56.485a0.82147 0.82147 0 0 0-0.82165 0.82166 0.82147 0.82147 0 0 0 0.0155 0.1571 1.8572 1.8572 0 0 1-5.2e-4 0 1.8572 1.8572 0 0 0-0.87644 0.91881 0.82147 0.82147 0 0 0-0.0847-0.0047 0.82147 0.82147 0 0 0-0.82165 0.82166 0.82147 0.82147 0 0 0 0.82165 0.82114 0.82147 0.82147 0 0 0 0.14986-0.01344 1.8572 1.8572 0 0 0 0.81856 0.78858 0.82147 0.82147 0 0 0-0.0222 0.18965 0.82147 0.82147 0 0 0 0.82166 0.82114 0.82147 0.82147 0 0 0 0.82114-0.82114 0.82147 0.82147 0 0 0-0.0186-0.17415 1.8572 1.8572 0 0 0 0.84594-0.79478 0.82147 0.82147 0 0 0 0.0837 0.0041 0.82147 0.82147 0 0 0 0.82166-0.82114 0.82147 0.82147 0 0 0-0.82166-0.82166 0.82147 0.82147 0 0 0-0.0155 5.3e-4 1.8572 1.8572 0 0 0-0.90796-0.93018 0.82147 0.82147 0 0 0 0.0124-0.14159 0.82147 0.82147 0 0 0-0.82113-0.82166z" />
                <path d="m176.6 89.915a0.82147 0.82147 0 0 0-0.82166 0.82166 0.82147 0.82147 0 0 0 0.0155 0.15709 1.8572 1.8572 0 0 1-5.3e-4 0 1.8572 1.8572 0 0 0-0.87644 0.91881 0.82147 0.82147 0 0 0-0.0848-5e-3 0.82147 0.82147 0 0 0-0.82165 0.82166 0.82147 0.82147 0 0 0 0.82165 0.82113 0.82147 0.82147 0 0 0 0.14986-0.0134 1.8572 1.8572 0 0 0 0.81856 0.78859 0.82147 0.82147 0 0 0-0.0222 0.18965 0.82147 0.82147 0 0 0 0.82166 0.82114 0.82147 0.82147 0 0 0 0.82114-0.82114 0.82147 0.82147 0 0 0-0.0186-0.17415 1.8572 1.8572 0 0 0 0.84594-0.79478 0.82147 0.82147 0 0 0 0.0837 4e-3 0.82147 0.82147 0 0 0 0.82165-0.82114 0.82147 0.82147 0 0 0-0.82165-0.82166 0.82147 0.82147 0 0 0-0.0155 5.3e-4 1.8572 1.8572 0 0 0-0.90795-0.93017 0.82147 0.82147 0 0 0 0.0124-0.1416 0.82147 0.82147 0 0 0-0.82114-0.82165z" />
              </g>
            </g>
            <g fill="none" stroke="#d1d5d9" stroke-width="1.0583">
              <path
                className={`building ${activeBuilding ? "active" : ""}`}
                d="m192.3 86.719v4.5717"
              />
              <path
                className={`octo ${activeOcto ? "active" : ""}`}
                d="m124.48 88.629c-2e-4 8.8371 9.3384 16.001 20.858 16.001 11.52-2e-5 20.858-7.164 20.858-16.001"
              />
              <path
                className={`octo ${activeOcto ? "active" : ""}`}
                d="m166.2 85.486c-0.0699-2.9999-1.238-5.9243-3.3708-8.4393 0.0607-0.08962 0.11831-0.18153 0.1726-0.27544 0.94674-1.6399 0.71724-3.5449-0.51263-4.255-1.0586-0.61114-2.5445-0.14428-3.5543 1.1167-3.7825-2.4918-8.6035-3.8618-13.589-3.8618-0.0401-8.9e-5 -0.0803-8.9e-5 -0.12041 0-4.626 0.02066-9.1118 1.2205-12.752 3.4106-1.01-1.1415-2.4089-1.5313-3.4143-0.95136-1.1941 0.68916-1.451 2.5112-0.5824 4.1305-2.5178 2.6558-3.9093 5.8417-3.9858 9.125"
              />
              <path
                className={`octo ${activeOcto ? "active" : ""}`}
                d="m126.2 86.915h38.573"
              />
            </g>
            <circle
              className={`eye ${activeEye ? "active" : ""}`}
              cx="135.48"
              cy="79.629"
              r="1.8572"
              fill="#d1d5d9"
              fill-rule="evenodd"
              stroke-width=".26458"
            />
            <g fill="none" stroke="#d1d5d9">
              <g stroke-width="1.0583">
                <path
                  className={`octo ${activeOcto ? "active" : ""}`}
                  d="m145.06 104.34v32.287"
                />
                <path
                  className={`octo ${activeOcto ? "active" : ""}`}
                  d="m136.2 118.7a2.9287 2.9287 0 0 1-2.9287 2.9287 2.9287 2.9287 0 0 1-2.9287-2.9287 2.9287 2.9287 0 0 1 2.9287-2.9287 2.9287 2.9287 0 0 1 2.9287 2.9287z"
                />
                <path
                  className={`octo ${activeOcto ? "active" : ""}`}
                  d="m156.13 127.63a2.9287 2.9287 0 0 1-2.9287 2.9287 2.9287 2.9287 0 0 1-2.9287-2.9287 2.9287 2.9287 0 0 1 2.9287-2.9287 2.9287 2.9287 0 0 1 2.9287 2.9287z"
                />
                <circle
                  className={`octo ${activeOcto ? "active" : ""}`}
                  cx="145.06"
                  cy="141.63"
                  r="5.1431"
                />
                <path
                  className={`octo ${activeOcto ? "active" : ""}`}
                  d="m133.91 115.63c0.58478-3.3581 2.3159-4.2412 4.3115-5.3817l6.8319-3.9045"
                />
                <path
                  className={`octo ${activeOcto ? "active" : ""}`}
                  d="m153.63 124.49s0.18441-5.3674-3.1521-5.7653c-3.1873-0.3801-5.4197-8.3782-5.4197-8.3782"
                />
              </g>
              <g
                className={`cats ${activeCats ? "active" : ""}`}
                transform="matrix(.79125 0 0 .79125 -2.4604 62.799)"
                stroke-width="1.3375"
              >
                <path d="m48.5 131.5v8m-26-17v17m12-36c0-7.732 6.268-14 14-14s14 6.268 14 14v14c0 7.732-6.268 14-14 14s-14-6.268-14-14zm28 1h-13m13 9h-11" />
                <path d="m42.5 84.077v-5c0-3.035-0.676-5.913-1.886-8.49 2.92-12.337-2.104-19.316-9.063-9.35a19.916 19.916 0 0 0-9.051-2.16c-3.257 0-6.333 0.779-9.05 2.16-6.96-9.966-11.985-2.987-9.064 9.351a19.923 19.923 0 0 0-1.886 8.49v23.422c0 11.046 8.954 20 20 20 2.09 0 4.106-0.321 6-0.916m-8-45.084v2m13-2v2m-14 15-5 5m5 0-5-5" />
              </g>
              <g
                className={`clouds ${activeClouds ? "active" : ""}`}
                transform="matrix(.76061 0 0 .76061 13.424 55.94)"
                stroke-width="1.3914"
              >
                <path d="m9.5 5.5a7 7 0 0 0 0 14h39.5a4 4 0 0 1 0 8h-5a7 7 0 1 0 0 14h39a7 7 0 1 0 0-14h-17a4 4 0 0 1 0-8h0.5a7 7 0 1 0 0-14z" />
                <circle cx="89" cy="12.5" r="7" />
              </g>
            </g>
          </g>
        </svg>
        <span className={`toggle ${isDark ? "active" : ""}`}>
          <div className="frame">
            <div
              className={`circle ${isDark ? "active" : ""}`}
              onClick={this.toggle}
            >
              <svg
                className="moon"
                fill="#ffdf5d"
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6.2835 10.576c4.5842 0 8.3004-3.7163 8.3004-8.3004 0-0.55176-0.0538-1.091-0.1565-1.6126-0.0726-0.36854 0.314-0.67873 0.6242-0.4669 2.4389 1.6656 4.0398 4.4679 4.0398 7.6442 0 5.1086-4.1413 9.25-9.25 9.25-4.5916 0-8.4019-3.3456-9.126-7.732-0.061135-0.37029 0.38242-0.59037 0.68577-0.36937 1.3701 0.99814 3.0574 1.5871 4.8823 1.5871z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </span>
      </SvgStyles>
    );
  }
}

export default DarkMode;
