import axios from 'axios'

export default {
  name: 'mactest',
  components: {}, 
  props: [],
  data () {
    return {
      arptbl: { },
      mac: ''
    }
  },
  computed: {

  },
  mounted () {
    this.get_arptbl()
  },
  methods: {
    get_arptbl() {
      axios({ "metdod": "POST", "url": "" }).
      then(res => { this.arptbl = res.data }, error => { console.log(error) });
    },

  calcmac(m) {
    var tot = 0;
    var m1 = m.toLowerCase();
    var l = this.arptbl.length;
    var ar = this.arptbl;
    for (var i = 0; i < l; i++) {
      var m2 = ar[i][0];
      if (m2.indexOf(m1) > -1) { tot++; }
    } // end foreach arptbl 
    return tot;
  } // end calcmac

  } // end methods
}
