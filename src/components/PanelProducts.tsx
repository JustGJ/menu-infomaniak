/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef } from "react";
import { ItemsLeftPanel, ItemsLeftPanelProps } from "./ItemsLeftPanel";
import { Product } from "./Product";

interface PanelProductsProps {
    panelProductRef: React.RefObject<HTMLDivElement>;
}


export const PanelProducts = ({ panelProductRef }: PanelProductsProps) => {
  const onMouseOver = () => {
    console.log("test");
  };

  const mainPanelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const items: ItemsLeftPanelProps[] = [
      {
        title:"Nos Best Sellers",
        onMouseOver,
        description: "Les produits les plus populaires",
      },
      {
        title:"Je souhaite",
        onMouseOver,
      }, 
      {
        title:"Nom de domaine",
        onMouseOver,
      }
    ]
  return (
    <div ref={panelProductRef} className="panel">
        <div className="panel__left">
        {items.map((item, index) => (
          <ItemsLeftPanel
            key={index}
            {...item}
            onMouseOver={() => {
              mainPanelRefs.current.forEach((el) =>
                el?.classList.remove("visible")
              );
              mainPanelRefs.current[index]?.classList.add("visible");
            }}
          />
        ))}
        </div>
        <div ref={(el) => (mainPanelRefs.current[0] = el)} className="panel__main visible">
          <div className="panel__search">
            <input type="text" placeholder="Rechercher un produit" />
          </div>
          <div className="panels__columns">
            <div className="panel__center">
              <p>Nos produits phares du moment</p>
              <div className="panel__products">
                <div>
                  <p className="subtitle">kSuite</p>
                  <Product title="kSuite" description="Solution de collaboration" />
                  <Product title="kMail" description="blabla" />
                  <Product title="kChat" description="Solut" />

                </div>
                <div>
                  <p className="subtitle">Grand public</p>
                  <Product title="Nom de domaine" description="Solution de collaboration" />
                  <Product title="Hébergement Web" description="blabla" />
                  <Product title="Hébergement Wordpress" description="Solut" />
                </div>
                <div>
                  <p className="subtitle">Cloud Computing</p>
                  <Product title="VPS Cloud" description="Solution de collaboration" />
                  <Product title="Public Cloud" description="blabla" />
                  <Product title="Jelastic Cloud" description="Solut" />
                </div>
              </div>
            </div>
            <div className="panel__right">
              <p className="subtitle">Action rapide</p>
              <ul>
                <li>Transférer un domaine</li>
                <li>Comparer nos solutions cloud et hébergement</li>
                <li>Migrer des clases mail</li>
                <li>Renalway Warranty</li>
                <li>Payer facture</li>
                <li>Guide des questions</li>
              </ul>
              <div>
                <p className="subtitle">Etude de cas</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={(el) => (mainPanelRefs.current[1] = el)} className="panel__main">
          <div className="panel__search">
            <input type="text" placeholder="Rechercher un produit" />
          </div>
          <div className="panels__columns">
            <div className="panel__center">
              <p>Selections</p>
              <div className="panel__products">
                <div>
                  <p className="subtitle">kSuite</p>
                  <Product title="kSuite" description="Solution de collaboration" />
                  <Product title="kMail" description="blabla" />
                  <Product title="kChat" description="Solut" />

                </div>
                <div>
                  <p className="subtitle">Grand public</p>
                  <Product title="Nom de domaine" description="Solution de collaboration" />
                  <Product title="Hébergement Web" description="blabla" />
                  <Product title="Hébergement Wordpress" description="Solut" />
                </div>
                <div>
                  <p className="subtitle">Cloud Computing</p>
                  <Product title="VPS Cloud" description="Solution de collaboration" />
                  <Product title="Public Cloud" description="blabla" />
                  <Product title="Jelastic Cloud" description="Solut" />
                </div>
              </div>
            </div>
            <div className="panel__right">
              <p className="subtitle">Action rapide</p>
              <ul>
                <li>Transférer un domaine</li>
                <li>Comparer nos solutions cloud et hébergement</li>
                <li>Migrer des clases mail</li>
                <li>Renalway Warranty</li>
                <li>Payer facture</li>
                <li>Guide des questions</li>
              </ul>
              <div>
                <p className="subtitle">Etude de cas</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

