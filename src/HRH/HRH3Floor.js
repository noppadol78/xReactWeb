import './thirdFloor.css';
import React, {Component} from 'react';
import axios from 'axios';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
require('es6-promise').polyfill();

class ThirdFloor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      rooms: [],
    };
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 10000);
  }

  fetchData() {
    axios
      .get(`https://findhuddle-api.azurewebsites.net/api/devices/HRH/3`)
      .then((res) => {
        this.setState({
          isLoaded: true,
          rooms: res.data,
        });
        console.log('fetched');
      })
      .catch((err) => {
        console.log('error');
      });
  }

  render() {
    var {isLoaded, rooms} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3 className="building">HRH 3rd Floor</h3>

          <div className="Wrap">
            <table>
              <tbody>
                <tr className="row">
                  {/* TODO: Split SVG to be separate file instead of hardcoding */}
                  <td className="floor-plan">
                    <svg
                      width="100%"
                      height="650"
                      viewBox="0 0 666 729"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="662"
                        height="725"
                        fill="#EEF4FA"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="495"
                        y="205"
                        width="96"
                        height="121"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="160"
                        y="122"
                        width="65"
                        height="262"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="260"
                        y="280"
                        width="65"
                        height="104"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="2"
                        y="183"
                        width="133"
                        height="149"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="257"
                        y="122"
                        width="99"
                        height="129"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="2"
                        y="331"
                        width="133"
                        height="53"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="356"
                        y="201"
                        width="94"
                        height="50"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="405"
                        y="122"
                        width="45"
                        height="79"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="341"
                        y="280"
                        width="109"
                        height="104"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="117"
                        y="450"
                        width="205"
                        height="277"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="322"
                        y="450"
                        width="88"
                        height="185"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="436"
                        y="450"
                        width="60"
                        height="185"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="322"
                        y="666"
                        width="342"
                        height="61"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="521"
                        y="550"
                        width="143"
                        height="59"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <rect
                        x="521"
                        y="607"
                        width="143"
                        height="59"
                        fill="#CBE0F4"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <Tippy content="HD30001">
                        <rect key="HD30001"
                          x="287"
                          y="122"
                          width="40"
                          fill={new Date() - new Date(rooms[0].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          height="41"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>
                      <Tippy content="HD30002">
                        <path key="HD30002"
                          d="M370 344H410V384H370V344Z"
                          fill={new Date() - new Date(rooms[1].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>
                      <Tippy content="HD30003">
                        <rect key="HD30003"
                          x="410"
                          y="344"
                          width="40"
                          fill={new Date() - new Date(rooms[2].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          height="40"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>
                      <Tippy content="HD30004">
                        <rect key="HD30004"
                          x="551"
                          y="286"
                          width="40"
                          fill={new Date() - new Date(rooms[3].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          height="40"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>
                      <Tippy content="HD30005">
                        <rect key="HD30005"
                          x="551"
                          y="244"
                          width="40"
                          fill={new Date() - new Date(rooms[4].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          height="43"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>
                      <Tippy content="HD30006">
                        <rect key="HD30006"
                          x="551"
                          y="206"
                          width="40"
                          fill={new Date() - new Date(rooms[5].lastOnline) > 300000 ? ("#559F3B") : ("#DD0F0F")}
                          height="40"
                          stroke="black"
                          strokeWidth="4"
                        />
                      </Tippy>

                      <path
                        d="M122.664 412.786V416.98H127.236V418.33H122.664V422.65H127.776V424H121.026V411.436H127.776V412.786H122.664ZM135.06 413.956C136.26 413.956 137.232 414.322 137.976 415.054C138.72 415.774 139.092 416.818 139.092 418.186V424H137.472V418.42C137.472 417.436 137.226 416.686 136.734 416.17C136.242 415.642 135.57 415.378 134.718 415.378C133.854 415.378 133.164 415.648 132.648 416.188C132.144 416.728 131.892 417.514 131.892 418.546V424H130.254V414.136H131.892V415.54C132.216 415.036 132.654 414.646 133.206 414.37C133.77 414.094 134.388 413.956 135.06 413.956ZM143.766 415.486V421.3C143.766 421.78 143.868 422.122 144.072 422.326C144.276 422.518 144.63 422.614 145.134 422.614H146.34V424H144.864C143.952 424 143.268 423.79 142.812 423.37C142.356 422.95 142.128 422.26 142.128 421.3V415.486H140.85V414.136H142.128V411.652H143.766V414.136H146.34V415.486H143.766ZM149.962 415.738C150.25 415.174 150.658 414.736 151.186 414.424C151.726 414.112 152.38 413.956 153.148 413.956V415.648H152.716C150.88 415.648 149.962 416.644 149.962 418.636V424H148.324V414.136H149.962V415.738ZM163.535 414.136L157.595 428.644H155.903L157.847 423.892L153.869 414.136H155.687L158.783 422.128L161.843 414.136H163.535ZM169.279 412.48V410.986H172.663V424H171.007V412.48H169.279Z"
                        fill="black"
                      />
                      <path
                        d="M361.37 646.786V650.98H365.942V652.33H361.37V656.65H366.482V658H359.732V645.436H366.482V646.786H361.37ZM373.766 647.956C374.966 647.956 375.938 648.322 376.682 649.054C377.426 649.774 377.798 650.818 377.798 652.186V658H376.178V652.42C376.178 651.436 375.932 650.686 375.44 650.17C374.948 649.642 374.276 649.378 373.424 649.378C372.56 649.378 371.87 649.648 371.354 650.188C370.85 650.728 370.598 651.514 370.598 652.546V658H368.96V648.136H370.598V649.54C370.922 649.036 371.36 648.646 371.912 648.37C372.476 648.094 373.094 647.956 373.766 647.956ZM382.472 649.486V655.3C382.472 655.78 382.574 656.122 382.778 656.326C382.982 656.518 383.336 656.614 383.84 656.614H385.046V658H383.57C382.658 658 381.974 657.79 381.518 657.37C381.062 656.95 380.834 656.26 380.834 655.3V649.486H379.556V648.136H380.834V645.652H382.472V648.136H385.046V649.486H382.472ZM388.669 649.738C388.957 649.174 389.365 648.736 389.893 648.424C390.433 648.112 391.087 647.956 391.855 647.956V649.648H391.423C389.587 649.648 388.669 650.644 388.669 652.636V658H387.031V648.136H388.669V649.738ZM402.241 648.136L396.301 662.644H394.609L396.553 657.892L392.575 648.136H394.393L397.489 656.128L400.549 648.136H402.241ZM408.219 656.686C409.743 655.462 410.937 654.46 411.801 653.68C412.665 652.888 413.391 652.066 413.979 651.214C414.579 650.35 414.879 649.504 414.879 648.676C414.879 647.896 414.687 647.284 414.303 646.84C413.931 646.384 413.325 646.156 412.485 646.156C411.669 646.156 411.033 646.414 410.577 646.93C410.133 647.434 409.893 648.112 409.857 648.964H408.273C408.321 647.62 408.729 646.582 409.497 645.85C410.265 645.118 411.255 644.752 412.467 644.752C413.703 644.752 414.681 645.094 415.401 645.778C416.133 646.462 416.499 647.404 416.499 648.604C416.499 649.6 416.199 650.572 415.599 651.52C415.011 652.456 414.339 653.284 413.583 654.004C412.827 654.712 411.861 655.54 410.685 656.488H416.877V657.856H408.219V656.686Z"
                        fill="black"
                      />
                      <path
                        d="M169.856 586.048V591.64H175.952V593.44H169.856V599.2H176.672V601H167.672V584.248H176.672V586.048H169.856ZM182.161 583.24V601H179.977V583.24H182.161ZM197.883 593.92C197.883 594.336 197.859 594.776 197.811 595.24H187.299C187.379 596.536 187.819 597.552 188.619 598.288C189.435 599.008 190.419 599.368 191.571 599.368C192.515 599.368 193.299 599.152 193.923 598.72C194.563 598.272 195.011 597.68 195.267 596.944H197.619C197.267 598.208 196.563 599.24 195.507 600.04C194.451 600.824 193.139 601.216 191.571 601.216C190.323 601.216 189.203 600.936 188.211 600.376C187.235 599.816 186.467 599.024 185.907 598C185.347 596.96 185.067 595.76 185.067 594.4C185.067 593.04 185.339 591.848 185.883 590.824C186.427 589.8 187.187 589.016 188.163 588.472C189.155 587.912 190.291 587.632 191.571 587.632C192.819 587.632 193.923 587.904 194.883 588.448C195.843 588.992 196.579 589.744 197.091 590.704C197.619 591.648 197.883 592.72 197.883 593.92ZM195.627 593.464C195.627 592.632 195.443 591.92 195.075 591.328C194.707 590.72 194.203 590.264 193.563 589.96C192.939 589.64 192.243 589.48 191.475 589.48C190.371 589.48 189.427 589.832 188.643 590.536C187.875 591.24 187.435 592.216 187.323 593.464H195.627ZM205.662 598.984L209.742 587.848H212.07L206.91 601H204.366L199.206 587.848H201.558L205.662 598.984ZM213.403 594.376C213.403 593.032 213.675 591.856 214.219 590.848C214.763 589.824 215.507 589.032 216.451 588.472C217.411 587.912 218.475 587.632 219.643 587.632C220.795 587.632 221.795 587.88 222.643 588.376C223.491 588.872 224.123 589.496 224.539 590.248V587.848H226.747V601H224.539V598.552C224.107 599.32 223.459 599.96 222.595 600.472C221.747 600.968 220.755 601.216 219.619 601.216C218.451 601.216 217.395 600.928 216.451 600.352C215.507 599.776 214.763 598.968 214.219 597.928C213.675 596.888 213.403 595.704 213.403 594.376ZM224.539 594.4C224.539 593.408 224.339 592.544 223.939 591.808C223.539 591.072 222.995 590.512 222.307 590.128C221.635 589.728 220.891 589.528 220.075 589.528C219.259 589.528 218.515 589.72 217.843 590.104C217.171 590.488 216.635 591.048 216.235 591.784C215.835 592.52 215.635 593.384 215.635 594.376C215.635 595.384 215.835 596.264 216.235 597.016C216.635 597.752 217.171 598.32 217.843 598.72C218.515 599.104 219.259 599.296 220.075 599.296C220.891 599.296 221.635 599.104 222.307 598.72C222.995 598.32 223.539 597.752 223.939 597.016C224.339 596.264 224.539 595.392 224.539 594.4ZM233.102 589.648V597.4C233.102 598.04 233.238 598.496 233.51 598.768C233.782 599.024 234.254 599.152 234.926 599.152H236.534V601H234.566C233.35 601 232.438 600.72 231.83 600.16C231.222 599.6 230.918 598.68 230.918 597.4V589.648H229.214V587.848H230.918V584.536H233.102V587.848H236.534V589.648H233.102ZM244.916 601.216C243.684 601.216 242.564 600.936 241.556 600.376C240.564 599.816 239.78 599.024 239.204 598C238.644 596.96 238.364 595.76 238.364 594.4C238.364 593.056 238.652 591.872 239.228 590.848C239.82 589.808 240.62 589.016 241.628 588.472C242.636 587.912 243.764 587.632 245.012 587.632C246.26 587.632 247.388 587.912 248.396 588.472C249.404 589.016 250.196 589.8 250.772 590.824C251.364 591.848 251.66 593.04 251.66 594.4C251.66 595.76 251.356 596.96 250.748 598C250.156 599.024 249.348 599.816 248.324 600.376C247.3 600.936 246.164 601.216 244.916 601.216ZM244.916 599.296C245.7 599.296 246.436 599.112 247.124 598.744C247.812 598.376 248.364 597.824 248.78 597.088C249.212 596.352 249.428 595.456 249.428 594.4C249.428 593.344 249.22 592.448 248.804 591.712C248.388 590.976 247.844 590.432 247.172 590.08C246.5 589.712 245.772 589.528 244.988 589.528C244.188 589.528 243.452 589.712 242.78 590.08C242.124 590.432 241.596 590.976 241.196 591.712C240.796 592.448 240.596 593.344 240.596 594.4C240.596 595.472 240.788 596.376 241.172 597.112C241.572 597.848 242.1 598.4 242.756 598.768C243.412 599.12 244.132 599.296 244.916 599.296ZM256.716 589.984C257.1 589.232 257.644 588.648 258.348 588.232C259.068 587.816 259.94 587.608 260.964 587.608V589.864H260.388C257.94 589.864 256.716 591.192 256.716 593.848V601H254.532V587.848H256.716V589.984ZM268.141 601.216C267.133 601.216 266.229 601.048 265.429 600.712C264.629 600.36 263.997 599.88 263.533 599.272C263.069 598.648 262.813 597.936 262.765 597.136H265.021C265.085 597.792 265.389 598.328 265.933 598.744C266.493 599.16 267.221 599.368 268.117 599.368C268.949 599.368 269.605 599.184 270.085 598.816C270.565 598.448 270.805 597.984 270.805 597.424C270.805 596.848 270.549 596.424 270.037 596.152C269.525 595.864 268.733 595.584 267.661 595.312C266.685 595.056 265.885 594.8 265.261 594.544C264.653 594.272 264.125 593.88 263.677 593.368C263.245 592.84 263.029 592.152 263.029 591.304C263.029 590.632 263.229 590.016 263.629 589.456C264.029 588.896 264.597 588.456 265.333 588.136C266.069 587.8 266.909 587.632 267.853 587.632C269.309 587.632 270.485 588 271.381 588.736C272.277 589.472 272.757 590.48 272.821 591.76H270.637C270.589 591.072 270.309 590.52 269.797 590.104C269.301 589.688 268.629 589.48 267.781 589.48C266.997 589.48 266.373 589.648 265.909 589.984C265.445 590.32 265.213 590.76 265.213 591.304C265.213 591.736 265.349 592.096 265.621 592.384C265.909 592.656 266.261 592.88 266.677 593.056C267.109 593.216 267.701 593.4 268.453 593.608C269.397 593.864 270.165 594.12 270.757 594.376C271.349 594.616 271.853 594.984 272.269 595.48C272.701 595.976 272.925 596.624 272.941 597.424C272.941 598.144 272.741 598.792 272.341 599.368C271.941 599.944 271.373 600.4 270.637 600.736C269.917 601.056 269.085 601.216 268.141 601.216Z"
                        fill="black"
                      />
                      <path
                        d="M346.884 651.884C347.372 651.396 347.372 650.604 346.884 650.116L338.929 642.161C338.441 641.673 337.649 641.673 337.161 642.161C336.673 642.649 336.673 643.441 337.161 643.929L344.232 651L337.161 658.071C336.673 658.559 336.673 659.351 337.161 659.839C337.649 660.327 338.441 660.327 338.929 659.839L346.884 651.884ZM307 652.25H346V649.75H307V652.25Z"
                        fill="black"
                      />
                      <path
                        d="M147.384 432.122C146.896 431.634 146.104 431.634 145.616 432.122L137.661 440.077C137.173 440.565 137.173 441.357 137.661 441.845C138.149 442.333 138.941 442.333 139.429 441.845L146.5 434.774L153.571 441.845C154.059 442.333 154.851 442.333 155.339 441.845C155.827 441.357 155.827 440.565 155.339 440.077L147.384 432.122ZM147.75 473.006V433.006H145.25V473.006H147.75Z"
                        fill="black"
                      />
                    </svg>
                  </td>

                  <td className="room">
                    {rooms.map((room) => (
                      <div className="room-card">
                        {new Date() - new Date(room.lastOnline) > 300000 ? (
                          // Daylight saving time calculation
                          <div className="room-box-available" key={room.id}>
                            <div className="room-name">{room.room}</div>
                            <div className="room-status-available">
                              Available
                            </div>
                          </div>
                        ) : (
                          <div className="room-box-occupied" key={room.id}>
                            <div className="room-name">{room.room}</div>
                            <div className="room-status-occupied">Occupied</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default ThirdFloor;
