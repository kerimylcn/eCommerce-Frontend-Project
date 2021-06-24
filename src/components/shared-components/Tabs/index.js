import { useState } from "react";
import "./tabs.scss";

const Tabs = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__sections">
        <h2
          style={
            tab === 0
              ? { background: "#262A33", color: "white", opacity: "1" }
              : null
          }
          onClick={() => setTab(0)}
        >
          Description
        </h2>
        <h2
          style={
            tab === 1
              ? { background: "#262A33", color: "white", opacity: "1" }
              : null
          }
          onClick={() => setTab(1)}
        >
          Additional Information
        </h2>
        <h2
          style={
            tab === 2
              ? { background: "#262A33", color: "white", opacity: "1" }
              : null
          }
          onClick={() => setTab(2)}
        >
          Reviews (3)
        </h2>
      </div>
      <div className="tabs__information">
        <div style={tab === 0 ? { display: "flex" } : { display: "none" }}>
          <p>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          </p>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
          </p>
        </div>
        <div style={tab === 1 ? { display: "flex" } : { display: "none" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            venenatis ipsum porta diam faucibus tempus. Aliquam a interdum nibh.
            Sed ligula elit, blandit faucibus sapien quis, viverra vulputate
            nulla. Cras rhoncus quis arcu id mattis. Vestibulum auctor lectus
            nisi, quis sodales eros ultrices ac. Aenean a bibendum odio.
            Pellentesque orci nisl, viverra eget pellentesque eu, vulputate
            venenatis erat. Ut suscipit diam at vulputate consequat. Integer sit
            amet tincidunt nibh, a vehicula magna. Pellentesque et tempus
            turpis.
          </p>
          <p>
            Pellentesque sed porttitor velit. Cras iaculis imperdiet vulputate.
            Vestibulum in condimentum libero, ut bibendum orci. Integer sit amet
            tellus ultrices, porta massa efficitur, aliquam ipsum. Nunc luctus
            augue dolor, vel condimentum mi consequat sit amet. Nullam nec
            consequat dui. Nunc quis elementum nisi, vulputate aliquam nisl.
            Nunc vel pellentesque sem. Quisque in commodo tortor, id facilisis
            nulla. Etiam rutrum tellus at viverra rutrum.
          </p>
        </div>
        <div style={tab === 2 ? { display: "flex" } : { display: "none" }}>
          <p>
            Etiam lacinia turpis luctus turpis scelerisque porta. Aliquam
            consectetur hendrerit libero, et molestie lorem vestibulum
            facilisis. Suspendisse cursus fringilla diam in cursus. Nullam
            commodo euismod arcu et aliquet. Donec pretium nec mauris eget
            consequat. Sed eget erat lectus. Vivamus augue sem, semper ut sapien
            vel, molestie laoreet mi. Duis ullamcorper dapibus tortor sed
            consectetur. Fusce tincidunt ipsum nibh, vel luctus ligula feugiat
            non. Phasellus sed ante quis magna pretium pretium nec eget magna.
          </p>
          <p>
            Sed id elit quis nunc luctus dapibus. Aliquam erat volutpat. Aenean
            augue tortor, laoreet non enim vitae, vestibulum fermentum sapien.
            Curabitur vel ex vitae nisl porta fermentum a vel ex. Nunc congue
            sem quis sem semper bibendum. Sed at ultrices turpis. Vestibulum
            lacinia in ipsum volutpat pharetra. Duis tempor elementum laoreet.
            Ut eget scelerisque velit, sed volutpat metus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
