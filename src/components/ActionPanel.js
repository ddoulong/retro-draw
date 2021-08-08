import React from 'react';

/* Need to build a blank cell list when user clicks CLEAR ALL */
import { buildCellList } from '../utils';

/**
 * The ActionPanel component represents the interface for updating the Grid
 * based on any number of buttons the user might click on.
 */
  /**
   * Create constants for activeColor, cellList, and setCellList, reading them from the props
   */
    /* clear all
      CLEAR ALL button needs an onClick function which:
        - creates a new cell list using buildCellList
        - passes the new cell list to setCellList
    *//* 
      Fill All button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over it, setting the color on each cell to activeColor
        - passes the new cell list to setCellList
    *//* 
      Fill Empty button needs an onClick function which:
        - creates a new cell list using buildCellList
        - loops over the original cellList, and for each cell in it:
          - set the corresponding (by index) new cell to its color (if it has one) OR
          - set the corresponding (by index) new cell to the activeColor
    */

const ActionPanel = ({activeColor, cellList, setCellList}) => {

  return <div className="action-panel">

    <button 
      onClick = {function () {
        let newCellList = buildCellList();
        setCellList(newCellList);
    }}>CLEAR ALL</button>

    <button
      onClick = {function (){
        let newCellList = buildCellList();
        newCellList.forEach( (cell, index) => { 
            cell.color = activeColor;
            cell.key = index;
      });
        setCellList(newCellList);
    }}>Fill All</button>

    {}
    <button
    onClick = {function () {
      let newCellList = buildCellList();
      cellList.forEach((cell, index) => {
        cell.color ?
        newCellList[index].color = cell.color : newCellList[index].color = activeColor;
      })
      setCellList(newCellList);
    }}>Fill Empty</button>
  </div>
}

export default ActionPanel;