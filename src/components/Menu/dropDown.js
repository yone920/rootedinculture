import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components'
import { Link } from "gatsby"
import Arrow from '../../images/svg/arrow-down.svg'

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  return (
    <DropDown>
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
        onMouseEnter={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <span className="dd-header__title--bold">{title}</span>
					{open ?
						<img className="arrow" src={Arrow} alt="React Logo" />
						:
						<img src={Arrow} alt="React Logo" />
					}
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          <Link to="/catering">Catering</Link>
          <Link to="/dinner">Dinner Parties</Link>
          <Link to="/flowers">Floral Design</Link>
        </ul>
      )}
    </DropDown>
  );
}

const DropDown = styled.div`
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: .2rem;

			.dd-header__title {
				display: flex;
				align-items: start;

				.arrow {
						transform: rotate(180deg);
					}
				}

				}
			}

		.dd-list {
			position: absolute;
			margin-left: -3rem;
			background-color: white;
			padding: 1rem 0rem 1rem 3rem;
			z-index: 99;
			margin-top: 1rem;
			border-radius: .5rem;

			border: 1px solid rgba(0,0,0,.15);
			a {
				display: block !important;
			}
		}
`

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);