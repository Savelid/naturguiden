

for location in ['export', 'import']:
  for region in ['SE1', 'SE2']:

    if location = 'export':
      prod_hour_el[location][region] = pd.DataFrame(prod_hour_el_normal.loc[location].loc['trade'][prod_hour_el_normal.loc[location].loc['trade'] <0].fillna(0), index=prod_hour_el_[x].columns).fillna(0).T
    elif location = 'import':
      prod_hour_el[location][region] = pd.DataFrame(prod_hour_el_normal.loc[location].loc['trade'][prod_hour_el_normal.loc[location].loc['trade'] <0].fillna(0), index=prod_hour_el_[x].columns).fillna(0).T
    else:
      print(" Error Error :( ")
    prod_hour_el[location][region].index = [location]
